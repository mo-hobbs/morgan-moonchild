class ApplicationController < ActionController::API
    include ActionController::Cookies

    #As a last step of the Rails setup, let's verify that the cookies and sessions middleware is working as expected. To do this, make a new controller action in the ApplicationController that uses the session hash and returns a JSON response:

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end
end