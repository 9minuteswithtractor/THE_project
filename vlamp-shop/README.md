
# Free time THE_project - let's go! 💪 😅

    Send data to the server
    
    If You are using XAMPP then You need to add virtual-host ( or work within htdocs directory (default) )
    Adding v-host: /Applications/XAMPP/xamppfiles/etc/extra/httpd-vhosts.conf
    Under localhost Server add another host and set UrUserName and pathToProject:
    <VirtualHost *:80>
          ServerName shop.localhost
          DocumentRoot "/Users/..UrUserName/..pathToProject/vlamp-shop/PHP"
          <Directory "/Users/..UrUserName/..pathToProject/vlamp-shop/PHP">
              Options Indexes FollowSymLinks Includes execCGI
              AllowOverride All
              Require all granted
          </Directory>
          # ErrorLog "logs/mysite.local-error_log"
    </VirtualHost>  

IMPORTANT! : restart XAMPP WebServer for the new config to work
