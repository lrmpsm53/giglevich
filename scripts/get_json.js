var request_of_objects_list = new XMLHttpRequest();
request_of_objects_list.open('GET', './objects_list.json');
request_of_objects_list.responseType = 'json';
request_of_objects_list.send();