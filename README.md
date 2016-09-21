Auto Shopify
============

A collection of scripts to automate Shopify tasks. Please submit a PR if you've created something useful with this.

Install with:
```
npm install -g autoshopify
```

Usage
-----
    Usage:

        autoshopify --api-key=MY_API_KEY --access-token=MY_ACCESS_TOKEN --shop=MY_SHOP COMMAND [OPTIONS]

        autoshopify --configfile=/path/to/config.json COMMAND [OPTIONS]

If you use a config file, structure it like this:
```
{
  "shop": "MY_SHOP",
  "shopify_api_key": "API_KEY",
  "access_token": "ACCESS_TOKEN"
}

```
Use your shop's slug for `MY_SHOP`. That is, `<my-shop>.shopify.com`.

(Note: for now you have to use an absolute path to the file. Annoying, I know.)

Available commands
------------------
### `replace-variant-name`
Replaces a variant name in all products.

Example:
```
autoshopify <keys> replace-variant-name 'Sample' '4"x4" Sample'
```
This will change the name of all variants from `Sample` to `4"x4" Sample`.

------

*Please contribute more.*  
This tool is a work in progress and more commands will be added in the future.
