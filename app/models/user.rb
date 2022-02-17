class User < ApplicationRecord
    has_secure_password
    has_many :saved_workouts

    PASSWORD_REQUIREMENTS = /\A
        (?=.{8,}) # at least 8 characters long
        (?.*\d) # Contain at least one number
        (?=.*[a-z]) # Contain at least one lowercase letter
        (?=.*[A-Z]) # Contain at least one uppercase letter
        /x

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validates :password, presence: true, format: PASSWORD_REQUIREMENTS

end
