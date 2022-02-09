class ReviewsController < ApplicationController
    skip_before_action :authorize

    def index
        reviews = Review.all
        render json: reviews
    end

    def show 
        review = Review.find(params[:id])
        render json: review
    end

end
