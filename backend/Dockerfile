# Stage 1: Build & Publish
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /app

# Copy csproj and restore dependencies
COPY src/HShop.Api/HShop.Api.csproj src/HShop.Api/
RUN dotnet restore src/HShop.Api/HShop.Api.csproj

# Copy all source files and publish release
COPY src/HShop.Api/ src/HShop.Api/
WORKDIR /app/src/HShop.Api
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Stage 2: Runtime Image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime
WORKDIR /app

# Expose ports (HTTP inside container is 8080 by default in .NET 8)
EXPOSE 8080

# Configure environment
ENV ASPNETCORE_URLS=http://+:8080
ENV ASPNETCORE_ENVIRONMENT=Development

# Copy published binaries from build stage
COPY --from=build /app/publish .

# Run application
ENTRYPOINT ["dotnet", "HShop.Api.dll"]
