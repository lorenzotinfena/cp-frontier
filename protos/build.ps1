docker run -v ${pwd}/..:/defs namely/protoc-all -d protos -o server/protos -l go
docker run -v ${pwd}/..:/defs namely/protoc-all -d protos -o client/public/protos -l web --js-out import_style=commonjs --grpc-web-out import_style=commonjs