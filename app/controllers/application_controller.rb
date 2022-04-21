class ApplicationController < ActionController::API
    include ActionController::Cookies

    before_action :authorize

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid

    def current_user
        User.find_by_id(session[:user_id])
    end

    private

    def authorize
        render json: {error: ["Not authorized"]}, status: :unauthorized 
    end

    def render_not_found
        render json: { error: "Record not found" }, status: :not_found
    end

    def render_invalid(exception)
        render json: {error: exception.record.errors.full_messages }, status: :unprocessable_entity
    end

    #As a last step of the Rails setup, let's verify that the cookies and sessions middleware is working as expected. To do this, make a new controller action in the ApplicationController that uses the session hash and returns a JSON response:
    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end


end