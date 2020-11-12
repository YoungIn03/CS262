Answers to Homework 3 questions

What are the (active) URLs for your data service?

    https://stormy-thicket-42453.herokuapp.com/

    https://stormy-thicket-42453.herokuapp.com/players
    
    https://stormy-thicket-42453.herokuapp.com/players/:id
    
    https://stormy-thicket-42453.herokuapp.com/playergame
    
    https://stormy-thicket-42453.herokuapp.com/joined_playergame

Which of these endpoints implement actions that are idempotent? nullipotent?

    Since all of the endpoints are HTTP GET commands, they are both idempotent and nullipotent

Is the service RESTful? If not, why not? If so, what key features make it RESTful?

  The service is RESTful because there are no client context stored on server. 
  It also uses HTTP protocol, and transfers XML/JSON data.
  Moreover the service uses URL structure and is stateless.

Is there any evidence in your implementation of an impedance mismatch?
  
    Yes because the Id needs to be obatained before fetching the datas
