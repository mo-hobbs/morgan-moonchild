class OrdersController < ApplicationController
    skip_before_action :authorize
end
