class UsersController < ApplicationController
    skip_before_action :authorize

    def index
        users = User.all
        render json: users
    end

    def show
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: :created
        else
            render json: { error: "No one is logged in" }, status: :unauthorized
        end
    end

    def create
        @user = User.create!(user_params)
        
        respond_to do |format|
            if @user.save
                # Tell the UserMailer to send a welcome email after save
                EmailMailer.with(user: @user).welcome_email.deliver_later
                
                format.html { redirect_to(@user, notice: 'User was successfully created.') }
                format.json { render json: @user, status: :created, location: @user }
            else
                format.html { render action: 'new' }
                format.json { render json: @user.errors, status: :unprocessable_entity }
            end

        end
        session[:user_id] = user.id

    end

    def destroy 
        user = User.find(params[:id])
        user.destroy 
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :full_name, :email)
    end

end
