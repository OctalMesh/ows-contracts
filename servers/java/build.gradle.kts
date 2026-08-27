plugins {
    id("org.openapi.generator") version "7.10.0" apply false
}

allprojects {
    group = "com.octalmesh.contracts"
    version = "1.0.0"
    repositories { mavenCentral() }
}

subprojects {
    apply(plugin = "org.openapi.generator")
    openApiGenerate {
        generatorName.set("spring")
        inputSpec.set("${rootDir}/../../dist/specs/${project.name.removeSuffix("-server")}.json")
        outputDir.set(projectDir.absolutePath)
        configOptions.set(mapOf("interfaceOnly" to "true", "useSpringBoot3" to "true"))
    }
}
