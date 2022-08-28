#!/usr/bin/env python
# -*- coding: utf-8 -*-
#

"""
File: views.py
Author: guyu
Date: 2017/6/12 20:55
"""

from django.shortcuts import render,HttpResponse
# from django.shortcuts import render_to_response
from django.http import HttpResponse
from rest_framework.views import APIView
import json
# 视图中
from django.http import JsonResponse
def testjson(request):
    data={
        'patient_name': '张三',
        'age': '25',
        'patient_id': '19000347',
        '诊断': '上呼吸道感染',
    }
    return HttpResponse(json.dumps(data), content_type='application/json')


class ClassBasedView(APIView):
    """
    docstring
    """
    def get(self, request):
        """

        :param request:
        :return:
        """
        html = 'I am ClassBasedview get func.'
        return HttpResponse(html)

    def post(self, request):
        """

        :param request:
        :return:
        """
        title = 'I am ClassBasedview post func.'
        param1 = request.POST.get('mychoice')
        print (param1)
        html = title + " mychoice is: " + str(param1)
        return HttpResponse(html)


class TestView(APIView):
    """
    docstring
    """
    def get(self, request):
        """

        :param request:
        :return:
        """
        print("request")
        print(request)
        html = 'I am ClassBasedview get func.'
        jsonObj={
            "name":"haha",
        }
        # return HttpResponse(html)
        return JsonResponse(jsonObj, safe=False)

    def post(self, request):
        """

        :param request:
        :return:
        """
        title = 'I am ClassBasedview post func.'
        param1 = request.POST.get('mychoice')
        print (param1)
        html = title + " mychoice is: " + str(param1)
        # return HttpResponse(html)
        listdata = ["张三", "25", "19000347", "上呼吸道感染"]
        # return JSONRe(html)
        return JsonResponse(listdata, safe=False)

