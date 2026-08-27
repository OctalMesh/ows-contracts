pluginManagement {
    repositories {
        gradlePluginPortal()
        mavenCentral()
    }
}
rootProject.name = "octalmesh-java-servers"
include("auth-server", "catalog-server", "order-server", "payment-server", "search-server")
