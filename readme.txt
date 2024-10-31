=== Password Policy & Complexity Requirements ===
Contributors: teydeastudio, bartoszgadomski
Tags: password-policy, password-strength, strong-password, passwords, password
Requires at least: 6.6
Tested up to: 6.6
Requires PHP: 7.4
Stable tag: 2.6.1
License: GPLv3
License URI: https://www.gnu.org/licenses/gpl-3.0.html
Plugin URI: https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=Plugin&utm_campaign=Plugin+research&utm_content=Plugin+header

Set up the password policy and complexity requirements for the users of your WordPress website.

== Description ==

**This plugin allows the site administrators to define password policies for site users** and, therefore, enforce them to use passwords compliant with the defined policy.

That will allow you to prevent your users from using weak passwords. With this plugin, you can define the password complexity rules, expiration rules, etc.

https://www.youtube.com/watch?v=nHCAiNV9caE

#### Plugin features

* **Enforce the minimum password length** - Prevent your users from using short passwords, which are easier to guess and compromise,
* **Enforce the maximum password age** - Enforce users to use their passwords no longer than for a defined period (i.e., one month).
* **Enforce the password complexity** - Ensure that the user password contains uppercase and lowercase letters, digits, special characters, unique (non-repeated) characters, and no more than a few consecutive symbols from the user’s name.
* **Apply to all users at once** - If you want to use the same password policy for all users, you can apply it to all your website users with a single toggle.
* **Multisite support** - This plugin can work on a single WordPress website and the WordPress network (aka. multisite).
* **Translation-ready** - Easily translate all the plugin contents into your language using any tool.

#### PRO features

* **Prevent passwords reuse** - If you want to enforce password storage, this feature can prevent users from reusing their previous passwords. This will mean they must create an entirely new password rather than using their "favorite" one.
* **Turn the policies on and off as needed** - Each password policy can be turned on and off, depending on your current needs. You can create as many password policies as you want.
* **Apply to specific users only** - You can apply the password policy to specific users only. You might want to maintain a dedicated password policy for vendors, freelancers, or users with higher permissions… it’s all up to you!
* **Apply to users by role** - Password policy can be applied to all users with a given role – for example, administrators or editors. This will allow you to define a stronger policy for users with higher permissions.
* **Integration with WooCommerce** - Password update and reset forms in "My Account" of WooCommerce are integrated with Password Policy & Complexity Requirements PRO plugin, bringing the password security features to your customers.

Find out more about the [PRO version here](https://teydeastudio.com/products/password-policy-and-complexity-requirements/?utm_source=Password+Policy+and+Complexity+Requirements&utm_medium=WordPress.org&utm_campaign=Plugin+upsell&utm_content=readme.txt).

== Screenshots ==

1. Password policy rules
2. Each password policy rule is configurable

== Changelog ==

= 2.6.1 (2024-10-25) =
* JS dependency map and tree-shaking optimized
* PHP 7.4 compatibility fixes implemented

= 2.6.0 (2024-10-17) =
* Fix blog switching bug in WordPress Multisite (Network) installations
* Add caching to user roles getter function, along with proper cache invalidation, to improve the plugin's performance
* Language mapping file added for easier generation of JSON translation files
* Dependencies updated
* Code improvements

= 2.5.0 (2024-08-30) =
* Compatibility with older version of PHP (7.4) implemented
* Dependencies updated
* Code improvements

= 2.4.0 (2024-08-20) =
* Password reset validation improvements - now rendering an user-friendly error message rather than a "wp_die" screen
* Password hint logic improved
* Required WordPress core version bumped to 6.6 to use the new React JSX runtime package
* Plugin container implementation improved
* Dependencies updated
* Code improvements

= 2.3.0 (2024-07-11) =
* Settings page redesigned
* Dependencies updated
* Code improvements

= 2.2.0 (2024-05-24) =
* Dependencies updated
* Code improvements
* Basic onboarding process implemented

= 2.1.1 (2024-04-26) =
* Plugin assets and descriptions updated

= 2.1.0 (2024-04-26) =
* Code improvements and dependency updates
* Improvements on plugin activation and deactivation hooks registration

= 2.0.0 (2024-04-12) =
* The first stable, public release
