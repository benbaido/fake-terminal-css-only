$('document').ready(function() {
    $cmd = '';
    $input = '';
    
    //ajax for the datafile
    
    //$datajson = JSON.parse($data);
    
    $bottom = $('#terminal_output').outerHeight(true);
    $('#terminal_output').scrollTop($bottom);
    
    $('#terminal_input').keypress(function(press) {
        if(press.which == 13) {
            $textstring = $('#terminal_output').html();
            /*
            $newtext = $('#terminal_input').val();
            $('#terminal_output').html($textstring + '<p>' + $newtext + '</p>');
            $('#terminal_input').val('');
            */
            
            $cmdstring = $('#terminal_input').val();
            $cmdstring = $cmdstring.split(/[\s]+/);
            $cmd = $cmdstring[0];
            $input = $cmdstring[1];
            if($cmd.toLowerCase === 'help' && $input === '') {
                $('#terminal_output').html($textstring + '<p>' + $cmd + ' ' + $input
                                           //
                                          );
            }
            else if(!$cmd || !$input) {
                $('#terminal_output').html($textstring + '<p>' + $cmd + ' ' + $input + '<br />' + 'invalid input' + '</p>');
            }
            else {
                $('#terminal_output').html($textstring + '<p>' + $cmd + ' ' + $input + '</p>');
            }
            
            
            $('#terminal_input').val('');
            
        }
        
    });

});