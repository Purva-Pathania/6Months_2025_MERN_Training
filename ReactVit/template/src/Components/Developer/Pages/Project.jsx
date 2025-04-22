import PageTitle from "../Layouts/PageTitle";
import {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card';
import {toast} from "react-toastify";
import ApiServices from "../services/ApiServices"
import {PacmanLoader} from "react-spinners"
export default function Project(){
  const [brands, setBrands]=useState([])
  const [load, setLoad]=useState(true)
  const [visibleBrands, setVisibleBrands]=useState([])
  const [index, setIndex]=useState(0)
  const limit=4
  useEffect(()=>{
    setLoad(true)
    fetchBrand()
  },[])
  useEffect(()=>{
    window.addEventListener("scroll", handleScroll)
    return()=>
      window.removeEventListener("scroll", handleScroll)
  },[brands, index])
  const fetchBrand=()=>{
    ApiServices.allBrand()
    .then((res)=>{
      if(res?.data?.success){
        toast.success(res?.data?.message)
        const all=res.data.data
        setBrands(all)
        setVisibleBrands(all.slice(0,limit))
        setIndex(limit)
      }else{
        toast.error(res?.data?.message)
      }
    })
    .catch((err)=>{
      console.error(err)
      toast.error(err?.message)
    })
    .finally(()=>{
      setTimeout(()=>{
        setLoad(false)
      },1000)
    })
  }
  const handleScroll=()=>{
    const {scrollTop, scrollHeight, clientHeight} = document.documentElement
    if(scrollTop+clientHeight>=scrollHeight-100){
      loadMore()
    }
  }
  const loadMore=()=>{
    const nextIndex=index+limit
    const more=brands.slice(index,nextIndex)
    if(more.length){
      setVisibleBrands(prev=>[...prev, ...more])
      setIndex(nextIndex)
    }
  }
    return(
        <>
          <PageTitle>Project</PageTitle>
          {load?
            <PacmanLoader cssOverride={{display:"block", margin:"0 auto"}} loading={load}/>
            :
            <div className="container mt-5">
              <div className="row">
              {visibleBrands?.map((brand,index)=>(
                <div
                className="col-6  mb-4" key={index}
              >
                  <div
                    className="blog-item bg-light rounded p-4"
                    style={{ backgroundImage: "url(/assets/img/bg.png)" }}
                  >
                    <div className="mb-4">
                      <h4 className="text-primary mb-2">Brands</h4>
                    </div>
                    <div className="project-img">
                      <img
                        src={brand?.image}
                        className="img-fluid rounded"
                        alt="Image"
                        style={{height:"200px", width:"300px", margin:"0 auto"}}
                      />
                    </div>
                    <p className="mb-0 mt-4">
                      <span className="text-dark fw-bold">{brand?.brandName}</span>
                    </p>
                  </div>
                </div>
              ))}
              </div>
            </div>
          }
        </>
    )
}