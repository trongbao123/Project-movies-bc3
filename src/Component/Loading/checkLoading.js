import React, { Fragment } from 'react'
import {useDispatch,useSelector} from 'react-redux'
import'../Loading/loading.css'
export default function Loading() {
  const{isLoading} = useSelector(state=>state.loadingRducer)
  console.log(isLoading, 'loading')
  const style = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height:'100%',
    backgroundColor: "rgba(0,0,0,.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex:'1000'
  }
  return (
    <Fragment> {isLoading ? <div style={style} ><div style={{ fontSize: 30, fontWeight: 600,color:'white' }}>
  <div className="sk-chase">
  <div className="sk-chase-dot" />
  <div className="sk-chase-dot" />
  <div className="sk-chase-dot" />
  <div className="sk-chase-dot" />
  <div className="sk-chase-dot" />
  <div className="sk-chase-dot" />
</div>

      </div></div> : ''}
    </Fragment>
    
  )
}
