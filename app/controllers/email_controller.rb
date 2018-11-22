class EmailController < ApplicationController
  def index
    @emails = Email.all.order('id asc')
  end

  def show
    @email = Email.find(params['id'])

    @email.update(status: true);
    @body = @email.body.gsub("'", "`")
    if @email
      respond_to do |format|
        format.html {redirect_to root_path }
        format.js
      end
    end
  end

  def create
  end

  def destroy
    @email = Email.find(params['id'])
    @email.destroy

    respond_to do |format|
      format.html { redirect_to root_path }
      format.json { head :no_content }
      format.js   { render :layout => false }
    end

  end

end
