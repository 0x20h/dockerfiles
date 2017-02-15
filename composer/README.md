# PHP composer

based on `alpine` and `PHP` use these images to run composer on your project.

## Versions

- [5.6](5.6/Dockerfile): based on PHP 5.6
- [7](7/Dockerfile): based on PHP 7

## Usage
```
docker run -v $PWD:/project 0x20h/composer:<5.6|7> install
```
