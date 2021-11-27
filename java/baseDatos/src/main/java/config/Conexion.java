package config;

import java.sql.*;
import java.util.logging.Level;
import java.util.logging.Logger;

public class Conexion {

    public String driver = "com.mysql.cj.jdbc.Driver";

    public Connection getConection() {
        Connection conexion = null;
        try {
            Class.forName(driver);
            conexion = DriverManager.getConnection("jdbc:mysql://localhost:3306/comision2160",
                    "miguellitta", "123456");
        } catch (SQLException e) {
            System.out.println(e.toString());
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(Conexion.class.getName()).log(Level.SEVERE, null, ex);
        }
        return conexion;
    }

    public static void main(String[] args) throws SQLException, ClassNotFoundException {
        Connection conexion = null;
        Conexion con = new Conexion();
        conexion = con.getConection();
        PreparedStatement ps;
        ResultSet rs;

        ps = conexion.prepareStatement("SELECT * FROM participantes");
        rs = ps.executeQuery();
        while (rs.next()) {
            int id = rs.getInt("id");
            String nombre = rs.getString("nombres");
            String apellido = rs.getString("apellidos");
            String email = rs.getString("email");
            int telefono = rs.getInt("telefono");
            System.out.println("id: " + id + "\n nombre: " + nombre + 
                    "\n Apellidos: " + apellido + "\n Email: " + email + "\n Telefono: " + telefono);
        }

    }
}
