# Free time THE_project - let's go! 💪 😅

✅  After git clone

        git switch dev_branch
        npm i
    
   ✅ Send data to the server
    
❗️ If You are using XAMPP then You need to add virtual-host so we can access php in other directories ( chained to /Applications/XAMPP/xamppfiles/htdocs by default )

Add / update v-host: 

        /Applications/XAMPP/xamppfiles/etc/extra/httpd-vhosts.conf
        
Under localhost Server add another host and set UrUserName and pathToProject:
    
    <VirtualHost *:80>
          ServerName shop.localhost
          DocumentRoot "/Users/..UrUserName/..pathToProject/THE_project/vlamp-shop/backend/PHP"
          <Directory "/Users/..UrUserName/..pathToProject/THE_project/vlamp-shop/backend/PHP">
              Options Indexes FollowSymLinks Includes execCGI
              AllowOverride All
              Require all granted
          </Directory>
          # ErrorLog "logs/mysite.local-error_log"
    </VirtualHost>  

❗️ IMPORTANT : restart XAMPP WebServer for the new config to work

# 🙏  Thank You for Contributing! Go Team! 🚀 🙂

![hi five!](https://i.pinimg.com/originals/8a/35/c2/8a35c2852acd66df73a5e9d82faa474d.gif)

