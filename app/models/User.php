<?php

use Zizaco\ConfideMongo\ConfideMongoUser;

class User extends ConfideMongoUser {
    /**
     * Ardent validation rules
     *
     * @var array
     */
    public static $rules = array(
        'email' => 'required|email',
        'password' => 'required|between:4,11|confirmed',
        'confirmation_code' => 'required',
    );
}