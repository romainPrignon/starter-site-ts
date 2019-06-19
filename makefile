.SILENT: build start
.PHONY: build start

build:
	docker build -t starter-site-ts:latest .

start:
	docker run -it -p 3000:3000 starter-site-ts:latest
