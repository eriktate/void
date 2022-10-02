make_session () {
	session=${1##*-}
	pushd ./$2
	tmux new -d -s $session
	tmux send-keys -t $session 'vim' C-m
	tmux new-window -t $session
	tmux new-window -t $session
	popd
}

make_session api .
make_session ui ui

tmux a
