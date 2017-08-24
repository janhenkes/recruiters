'use strict';

const json = require( './recruiters.json' );
const jsonxml = require( 'jsontoxml' );
const fs = require( 'fs' );



function parseToXML( json ) {
    let obj = { recruiters: [] };
    
    json.map( ( item ) => {
        obj.recruiters.push( { 'item': item } );
    } );
    
    const xml = jsonxml( obj, { xmlHeader: true } );
    
    fs.writeFile( 'recruiters.xml', xml, function ( err ) {
        if ( err ) return console.log( err );
    } );
}

parseToXML( json );



