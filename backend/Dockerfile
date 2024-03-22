FROM maven:3.9-amazoncorretto-21-debian AS build
WORKDIR /app

#resolve maven dependencies
COPY pom.xml /app/
COPY src /app/src
RUN mvn -f /app/pom.xml clean package

#
# Package stage
#

# Use a Java 21 runtime as the base image
FROM openjdk:21

COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar /app/app.jar

# Expose the port that your Spring Boot application listens on
EXPOSE 80

# Define the command to run your Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/app.jar"]