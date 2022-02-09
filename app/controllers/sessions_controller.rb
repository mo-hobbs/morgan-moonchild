class SessionsController < ApplicationController
    #from https://learning.flatironschool.com/courses/4552/pages/authenticating-users?module_item_id=346173 
    def create
        user = User.find_by(username: params[:username])
        session[:user_id] = user.id
        render json: user
    end

    def destroy
        session.delete :user_id
        head :no_content
    end
end
