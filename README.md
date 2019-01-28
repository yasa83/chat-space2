# DB設計

## users テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null:false, index: true|

### Association
- has_many :user_groups
- has_many :user, through: :group_users
- has_many :messages


## groups テーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false, index: true|
※email.passwordはdeviseによってデフォルトで記述されるので省略

### Association
- has_many :user_groups
- has_many :users, through: :user_groups
- has_many :messages


## user_groups テーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## messages テーブル
|Column|Type|Options|
|------|----|-------|
|body|text||
|image|text||
|group|references|null: false,foreign_key: true|
|user|references|null: false,foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user
