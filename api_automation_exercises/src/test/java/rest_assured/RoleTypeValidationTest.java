package rest_assured;

import static org.hamcrest.Matchers.*;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.junit.Before;
import org.junit.Test;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;

/**
 * Automated test to validate the type of the "Administrator" role.
 */
public class RoleTypeValidationTest{

    private static final String ROLE_NAME = "Administrator";
    private String url = "https://api.int.devo.com/probio/domain/{account}/roles/{roleName}";
    private Properties config = new Properties();

    @Before
    public void setup() {
        try {
            FileInputStream configFile = new FileInputStream("src/test/resources/config.properties");
            config.load(configFile);
        } catch (IOException e) {
            e.printStackTrace();
            throw new RuntimeException("Could not load configuration file");
        }
    }

    @Test
    public void verifyTypeOfAdministratiorRoleTest()
    {
       RestAssured.
                given().
                        pathParam("account", config.getProperty("account")).
                        pathParam("roleName", ROLE_NAME).
                headers(
                "Authorization",
                "Bearer " + config.getProperty("auth.token")).
                when().
                    get(url).
                    then().
                    statusCode(200). // Validate the response status code
                    contentType(ContentType.JSON). // Validate the response content type
                    body("type", equalTo("ADMIN")); // Validate that the role type is "ADMIN"
    }
}
