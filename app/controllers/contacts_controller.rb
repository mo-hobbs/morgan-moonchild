class ContactsController < ApplicationController
    skip_before_action :authorize

    def index
        contacts = Contact.all
        render json: contacts
    end

    def show 
        contact = Contact.find(params[:id])
        render json: contact
    end

    def create
        contact = Contact.create!(contact_params)
        render json: contact, status: :created
    end

    private

    def contact_params
        params.permit(:name, :email, :inquiry_type, :message)
    end
end
