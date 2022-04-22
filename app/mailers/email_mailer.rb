class EmailMailer < ApplicationMailer
  default from: 'madebythemoonchild@gmail.com'

  # def welcome_email
  #   @user = params[:user]
  #   @url  = 'http://www.morganmoonchild.com/login'
  #   mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  # end

  def welcome_email
    @user = params[:user]
    @url  = 'http://www.morganmoonchild.com'
    mail(to: @user.email, subject: 'Welcome to My Awesome Site')
  end


end
