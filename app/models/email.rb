class Email < ApplicationRecord
  after_initialize :init

  def init
    self.status  ||= false           #will set the default value only if it's nil
  end

end
