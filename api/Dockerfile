# syntax=docker/dockerfile:1


FROM golang:1.20 AS build-stage

# Set destination for COPY
WORKDIR /api

# Download Go modules
COPY go.mod go.sum ./
RUN go mod download

# Copy the source code. Note the slash at the end, as explained in
# https://docs.docker.com/engine/reference/builder/#copy
COPY *.go ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /fostercollab-api


# Run the tests in the container
FROM build-stage AS run-test-stage
RUN go test -v ./...


# Deploy the application binary into a lean image
FROM gcr.io/distroless/base-debian11 AS build-release-stage

# Set destination for COPY
WORKDIR /

# copy binary
COPY --from=build-stage /fostercollab-api /fostercollab-api

# Optional:
# To bind to a TCP port, runtime parameters must be supplied to the docker command.
# But we can document in the Dockerfile what ports
# the application is going to listen on by default.
# https://docs.docker.com/engine/reference/builder/#expose
EXPOSE 8080
USER nonroot:nonroot
ENTRYPOINT ["/fostercollab-api"]
