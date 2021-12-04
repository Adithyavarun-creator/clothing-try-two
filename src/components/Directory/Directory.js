import React,{Component} from 'react'
import './Directory.styles.scss'

import { connect } from 'react-redux'
import MenuItem from '../Menu-Items/Menu-Item'

import { selectDirectorySections } from '../../redux/directory/directory-selector'
import { createStructuredSelector } from 'reselect'

const Directory = ({sections}) => {
     return(
            <div className="directory-menu">
                {
                    sections.map(({id,...otherSectionProps})=>(
                        <MenuItem key={id}  {...otherSectionProps}/>
                    ))
                }
            </div>
        )
    }

const mapStateToProps = createStructuredSelector({
  sections:selectDirectorySections
})

export default connect(mapStateToProps)(Directory)