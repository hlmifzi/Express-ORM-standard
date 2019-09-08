#!/usr/bin/env bash
# Hey, my creator is Rian. Call him on rian6517@gmail.com
declare -r pass=1


# read start
# if ! $start = $pass ; then exit 2

# echo $pass
read -p "" start
 
if ! [ $start == $pass ]; then
    exit 2
fi

echo 'Features'
echo '+=========================+'
echo '| cmod : Creating Module  |'
echo '| dmod : Deleting Module  |'
echo '| init : Destroy your app |'
echo '+=========================+'

printf '\nHello, what can i help ? '
read mode

case $mode in
     cmod)
            echo 'Pardon, whats your module name ? '
            read myobj

            mkdir -p module/$myobj
            mkdir -p middleware/validation
            touch middleware/validation/$myobj.validation.js
            touch module/$myobj/$myobj.controller.js
            touch module/$myobj/$myobj.model.js
            touch module/$myobj/$myobj.routes.js

          ;;
     dmod)
            echo 'You gonna delete this module ? '
            read myobj

            rm -rf module/$myobj
            rm -rf middleware/validation/$myobj.validation.js
            rm -rf module/$myobj/$myobj.controller.js
            rm -rf module/$myobj/$myobj.model.js
            rm -rf module/$myobj/$myobj.routes.js
          ;;
     init)
          rm -rf .git
          echo "Very funny..."
          ;; 
     *)
          echo "Hmm, cant find anythings."
          exit 1
          ;;
esac

echo "Operation completed, cya"

exit 0