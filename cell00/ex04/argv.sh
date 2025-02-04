if [ $# -eq 0 ]
then
    echo "no arguments"
elif [ $# -eq 1 ]
then
    echo "$1"
elif [ $# -eq 2 ]
then
    echo "$1"
    echo "$2"
elif [ $# -eq 3 ]
then
    echo "$1"
    echo "$2"
    echo "$3"
else
    echo "$1"
    echo "$2"
    echo "$3"
fi