# [hiijax.net](https://hiijax.net/)

Jax's homepage on the net.

## Developing

```sh
# clone and enter the repo
git clone https://git.hiijax.net/HiiJax/hiijax.net.git
cd hiijax.net

# install dependencies
npm install

# start the dev server
npm run dev
```

### Gallery

Currently, you can store originals for the art gallery at:

```
/original/[slug].[ext]
```

The following is needed for full functionality:

```
/gallery/[slug].avif
/gallery/[slug].webp
/thumb/[slug].webp
```

For now, use a tool like [XL Converter](https://github.com/JacobDev1/xl-converter) to create images at 90% quality. Full resolution in `/gallery`. Resize shortest edge to 240px in `/thumb`.

This will be done automatically at build time in the future.

## Production

For testing a production build locally, use docker:

```sh
# build the image
docker build -t hiijax.net .

# run the image
docker run -v ./static:/app/public -p 3000:3000 hiijax.net
```

Since this is just a personal website, Forgejo Actions automatically builds and overwrites the `:latest` tag in the container registry.

The is how the production container is typically run with docker-compose. Note that `./static` is now `./public` since we are no longer in a dev environment.

```yaml
services:
  hiijax.net:
    image: 'git.hiijax.net/hiijax/hiijax.net:latest'
    ports: '8080:3000'
    volumes:
      - ./public:/app/public
```

## Static Assets

Static assets are not included in this repo.

In production, an [Express](https://expressjs.com/) server is used to dynamically serve static assets at `/` from `/app/public` within the container. Therefore, this directory must be mounted into the container when running in production. This is so images and such can be easily swapped out by simply replacing the file.

For development, `/static/` has been added to `.gitignore` so that you can provide the assets there, since they are also served at `/` by `npm run dev`

## Credits

- [PetraPixel](https://petrapixel.neocities.org/) for her [layout generator](https://petrapixel.neocities.org/coding/layout-generator)!