# Image-Processing-API

## To Test the api use the following command

```bash
npm run test
```

## To run the api use the following command

```bash
npm run start
```

## to build the api use the following command

```bash
npm run build
```

## to lint the api use the following command

```bash
npm run lint
```

## to prettify the api use the following command

```bash
npm run prettier
```

## features

* html maping in the /api and the home page
* if image requested with diffrent sizes it will be cached for each size
* list the images in the server
* custom error handling
* providing help to the api user if there is a problem

## end Points

1. To go to the main page use the following url

> <http://localhost:3000/>

1. To go to the API list use the following url

> <http://localhost:3000/api>

1. to go to the Image Processing API use the following url

> <http://localhost:3000/api/image>

1. to list the images in the database use the following url

> <http://localhost:3000/api/image/list>

### **Note**

To use the API correctly you must provide the following query parameters

* filename for the image name you want to process
* width for the width of the image you want to process
* hight for the height of the image you want to process
for example for a link to the image you want to process

<http://localhost:3000/api/image?filename=encenadaport&width=200&hight=200>
