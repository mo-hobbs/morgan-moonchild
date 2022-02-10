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

    def render_reviews
        render_reviews = Review.where("star_rating =?", 5).max(3)
        render json: render_reviews
    end    


end
