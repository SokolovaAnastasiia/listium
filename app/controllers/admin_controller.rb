class AdminController < ApplicationController


    def index
      if params.has_key?(:category)
        @category = Category.find_by_name(params[:category])
        @posts = Post.where(category: @category)
        @comments = Comment.all
      else
        @posts = Post.all
        @comments = Comment.all
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_post
        @post = Post.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def post_params
        params.require(:post).permit(:name, :title, :content, :link, :category_id)
      end
end
