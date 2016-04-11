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

Add in /etc/hosts :

```shell
127.0.0.1 angular-drupal.fr
```

Needs to create database with PhpMyAdmin

TODOS :

- Change the way to get datas : Not from Drupal Nodes but from Article's view

[articlesrest]: https://github.com/AntoineCharbonnier/angular-drupal/blob/master/ressources/articlesrest.png
[articlesview]: https://github.com/AntoineCharbonnier/angular-drupal/blob/master/ressources/articlesview.png
[rest]: https://github.com/AntoineCharbonnier/angular-drupal/blob/master/ressources/rest.png
[rest2]: https://github.com/AntoineCharbonnier/angular-drupal/blob/master/ressources/rest2.png
[user]: https://github.com/AntoineCharbonnier/angular-drupal/blob/master/ressources/user.png


![Articles rest api][articlesrest]

![Articles Views from drupal][articlesview]

![Rest API][rest]

![Rest API 2][rest2]

![User in Drupal][user]
