class UsersController < ApplicationController
    before_action :set_user, only: [:show, :edit, :update, :destroy]


  # def index
  #   @users = User.all
  # end

  def index
    @users = User.all
    render component: 'Users', props: { users: @users }
    respond_to do |format|
      format.html  # index.html.erb
      format.json  { render :json => @users }
    end
  end



  def edit
  end

  def update
    # current_user.update(params[:user])
    # redirect_to current_user
    respond_to do |format|
      if @user.update(user_params)
         format.html { redirect_to users_path, notice: 'The user info was successfully updated' }
         format.json { render :show, status: :ok, location: @user }

      else
         format.html { render :new, status: :unprocessable_entity }
         format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end


  def show
    @user = User.find(params[:id])
    if @user
      @posts = @user.favorited_posts
      render actions: :show
      @favorites = @user.favorites.all
    else
        render file: 'public/404', status: 404, formats: [:html]
    end
  end

def favorited?(post)
    favorites.find_by(post_id: post.id).present?
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy
    redirect_to users_path, notice: 'User deleted.'
  end

  def follow
  @user = User.find(params[:id])
  current_user.followees << @user
  redirect_back(fallback_location: user_path(@user))
end

def unfollow
  @user = User.find(params[:id])
  current_user.followed_users.find_by(followee_id: @user.id).destroy
  redirect_back(fallback_location: user_path(@user))
end

def following
@user = User.find(params[:id])
if @user
  @follow = @user.followed_users
  render actions: :show
  @following = @user.followees.all
end
end


private

  def set_user
     @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:email, :username, :isadmin, :isblocked, :password)
  end


end
