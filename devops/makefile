build:
	@docker-compose -p apex build
run:
	@docker-compose -p apex up -d
stop:
	@docker-compose -p apex down
clean-data: 
	@docker-compose -p apex down -v
clean-images:
	@docker rmi `docker images -q -f "dangling=true"`