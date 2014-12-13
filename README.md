# Simple time information project

* Repositório - https://github.com/hebertsilva/page-time-simple

## Instalação

Siga os passos abaixo para instalação e configuração.

### Iniciando o projeto


Faça um clone do page-time-simple:

```shell
git clone https://github.com/hebertsilva/page-time-simple.git
```

### Compass e Grunt

#### Instalando as dependências

Para compilar o CSS é necessário ter o **ruby** e o [bundler](http://www.bundler.io/) instalado:

```shell
gem install bundler
```

Instale também o [NodeJS](http://nodejs.org/)

Em seguida o pacote do [Grunt](http://gruntjs.com/getting-started)

```shell
npm install -g grunt-cli
```

Instale as dependências do Grunt para o seu projeto

```shell
npm install
```

Instale as dependências do Compass

**Opção 1**:

```
cd compass
bundle install --path .bundle
```

**Opção 2** (usando o atalho do Grunt):

```shell
grunt bundler
```

#### Compilando CSS

**Opção 1**:

```shell
cd compass
bundle exec compass compile
```

**Opção 2**:

```shell
grunt css
```

#### Monitorando alterações no SCSS

**Opção 1**:

```shell
cd compass
bundle exec compass watch
```

**Opção 2**:

```shell
grunt
```

#### Otimização de imagens

```shell
grunt imagemin
```

Otimiza as imagens JPG e PNG utilizando o plugin [grunt-contrib-imagemin](https://github.com/gruntjs/grunt-contrib-imagemin)


#### Contribuindo 

Toda e qualquer pessoa é bem-vinda para contribuir.
