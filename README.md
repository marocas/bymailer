# BY Mailer
Designing and testing emails is a pain. HTML tables, inline CSS, various devices and clients to test, and varying support for the latest web standards.

This grunt task helps simplify things at the design stage:

1. Compiles your LESS to CSS
2. Builds your email templates
3. Inlines your CSS
4. Minify your images
5. Sends you a test email to your inbox (optional)
6. Uploads your files to server by FTP (optional)
7. CDN Transform your `/images/myimage.jpg` and `/index.html` to absolute path.

## Requirements
* [Node.js](http://nodejs.org/)
* [Grunt](http://gruntjs.com/)
* [Ruby](https://gorails.com/setup/osx/10.12-sierra)
* Premailer - Inlines the CSS  
  `gem install premailer nokogumbo or nokogiri`
* [Mailgun](http://www.mailgun.com) - Sends the email (optional)
* [Litmus](https://litmus.com) - Tests the email across all clients/browsers/devices (optional)
* [Litmus email Clients] (https://bycom.litmus.com/emails/clients.xml)  
 
## Ruby  
Open your terminal and run  
```
\curl -sSL https://get.rvm.io | bash -s stable
When this is complete, you need to restart your terminal for the rvm to work.
Run rvm list
This shows the list of versions of the ruby.
Run rvm install ruby-2.5.1
If you type ruby -v in the terminal, you should see ruby 2.5.1.
If it still shows you ruby 2.0., run rvm use ruby-2.5.1 --default.
```

## Getting started
If you haven't used [Grunt](http://gruntjs.com/) before check out Chris Coyier's post on [getting started with Grunt](http://24ways.org/2013/grunt-is-not-weird-and-hard/).

## Instalation
```
git clone http://gitlab.bycom.pt/gitlab/bymailer.git
npm install
grunt default server
```
Create a clone in a repository folder and track only the parent folder.  
Create the parent folder
```
$ mkdir YourProject
$ cd ~/your/path/
$ git init
$ cd ~/YourProject
```
Clone repo for the new project/branch  
How to do a Git clone without the .git directory
```
// Clone the repo
git clone --depth=1 https://github.com/marocas/bymailer <Project-branch>
// CD to cloned folder
cd ~/Project-branch
// Remove the .git directory
rm -rf .git
```

## How it works
![How it works](https://raw.githubusercontent.com/marocas/bymailer/master/how-it-works.jpg)

### CSS
This project uses [LESS](http://lesscss.org/). You don't need to touch the .css files, these are compiled automatically.

For changes to CSS, modify the `.less` files.

Media queries and responsive styles are in a separate style sheet so that they don't get inlined. Note that only a few clients support media queries e.g. iOS Mail app.

### Email templates and content
Handlebars is used for templating:
* `/layout` contains the standard header/body/footer HTML markup. You most likely will only need one layout template, but you can have as many as you like.
* `/layout/partials` is where your email content will go. The `email.hbs` and `index.hbs` is where you will work your templates. To start you off I've included some examples, after installation run `grunt default in the `examples` folder.

### Generate email templates
In terminal, run `grunt`. This will:
* Compile your LESS to CSS
* Generate your email layout and content
* Inline your CSS
* Minify your images
* Generate absolute images path

See the output HTML in the `html` folder on the `root`. Open them and preview it the browser.

Alternatively run `grunt server`, this will open a browser TAB and `grunt watch` will check for any changes you make to your `.less` and `.hbs` templates and automatically run the pre-defined tasks.

### Send test email
* Sign up for a [Mailgun](http://www.mailgun.com) account (it's free!)
* Open `Gruntfile.js` and replace:
```js
email: {  
  key:        'key-xpto',  
  sender:     'postmaster@sandboxxpto.mailgun.org',  
  recipient:  'yourtest@emailrecipient.com',   
  subject:    'This is a test email'  
}
```
  * the `KEY / SENDER` with your actual Mailgun API key and Mailgun Subdomains / Sandbox Name;
  * Change the sender and recipient
* Run `grunt send` to test your email.html or `grunt sendmail` that runs dist tasks and send your email.html

### CDN assets (self-hosted)
* Open `Gruntfile.js` and replace:
```js
deploy: {  
  cdn: 'http://example.com/folder/', 
  ftp: '/wwwroot/example.com/folder/',  
  dir: 'another-folder/'  
},
```
* Run `grunt dist` to run the default tasks and upload the assets to your FTP
