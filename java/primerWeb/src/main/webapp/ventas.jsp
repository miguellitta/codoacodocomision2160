<%-- 
    Document   : ventas
    Created on : 23 nov. 2021, 17:42:47
    Author     : Miguel
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <% 
            String nombre = "Luis";
            String usuario = request.getParameter("usuario");
           %>
        <h1>Hello <%= nombre%></h1>
    </body>
</html>
