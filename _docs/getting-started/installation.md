# Installation

## Using the official installer

You can follow the [official documentation](https://docs.vlang.io/installing-v-from-source.html) to install the `v` executable on your machine.

After following these instructions, ensure your installation works properly by running this command:

```v
v --version
```

```bash
V 0.4.12 d9e962f
```

## Using Docker Compose

If you are used to use Docker, you can copy this into a `docker-compose.yml` file to get up and running quickly:

```yml
services:
  v:
    image: khalyomede/vlang:latest-alpine
    entrypoint: v
    user: root
    working_dir: /root/app
    volumes:
      - .:/root/app
```

Then in your terminal ensure `v` is working:

```bash
docker compose run --rm v --version
```

```bash
V 0.4.12 d9e962f
```

If you use Bash (Linux), you can copy these aliases under `~/.bash_aliases` to simply run `v` instead of `docker compose run --rm v`

```bash
alias v="docker compose run --rm v"
```

Then ensure `v` works properly:

```bash
source ~/.bash_aliases
```

```bash
v --version
```

```bash
V 0.4.12 d9e962f
```
