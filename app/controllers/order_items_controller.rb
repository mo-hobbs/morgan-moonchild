class OrderItemsController < ApplicationController
    skip_before_action :authorize
end
