# Angular - Drupal

## Angular integration with Drupal BO

From this [tutorial](http://www.koberg.com/2014/06/08/headless-drupal-8-and-angularjs-theme-separation-of-concerns/)
https://github.com/rkoberg/d8client/tree/master


### Mamp vhost steps


```shell
cd MAMP/apache/extra/httpd-vhosts.conf
mkdir vhosts
```
In httpd-vhosts.conf :
```shell
Include /Applications/MAMP/conf/apache/extra/vhosts/*.conf
```

Create the vhost for the project, like angular-drupal.conf
```shell

<VirtualHost *:80>
    ServerName angular-drupal.fr
    DocumentRoot "/path-to/angular-drupal/d8server"
    <Directory /path-to/angular-drupal/d8server>
    	Options Indexes FollowSymLinks
        AllowOverride All
        Order allow,deny
        Allow from all
    </Directory>
</VirtualHost>

```
Needs to create database with PhpMyAdmin
