# ProfileScrapper

Scrapper de perfiles de Linkedin desarrollado para la Hackaton de SmartHackers

### Instalacion de backend

`cd .\fullscrap\`  
`pip install -r requirements.txt`  
`python manage.py migrate`  
`python manage.py runserver 0.0.0.0:8000`

### Exportar schema

`./manage.py graphql_schema --schema fullscrap.schema.schema --out schema.graphql`

### Instalacion de frontend

`cd ./fullscrap-frontend`
`nvm use 16.0.0`
